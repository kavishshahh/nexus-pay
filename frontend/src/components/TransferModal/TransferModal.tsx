import { useState } from "react";
import {
  getBalances,
  testSendMoneyToAccount,
  sendStablePayment,
} from "@/core/transactions";
import { useKeylessAccounts } from "@/core/useKeylessAccounts";
import { useDispatch, useSelector } from "react-redux";
import {
  convertAptToOcta,
  convertOctaToApt,
  isValidCustomText,
  isValidWalletAddress,
} from "@/core/utils";
import { setUserBalance } from "@/redux/reducers/authReducer";
import mixpanel from "mixpanel-browser";

const TransferModal = ({
  onClose,
  balance,
  setRecipientAddress,
  transferAmount,
  setTransferAmount,
  setTransferError,
  recipientAddress,
  transferError,
  paymentviaDynamicQR,
}: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { activeAccount } = useKeylessAccounts();
  const dispatch = useDispatch();
  const { idToken, activeAccountAdress } = useSelector(
    (state: any) => state.authSlice
  );

  // console.log(activeAccountAdress);

  const handleTransferAmountChange = (e: any) => {
    const amount = e.target.value;
    setTransferAmount(amount);

    if (parseFloat(amount) > balance[0]?.amount) {
      setTransferError("Insufficient balance");
    } else {
      setTransferError("");
    }
  };

  const sendMoney = async (recipientAddress: any) => {
    mixpanel.track("send_money_initiated");
    setIsLoading(true);
    try {
      if (!recipientAddress) {
        throw new Error("Active account is not provided.");
      }

      const getBalancesResponse = await getBalances(activeAccountAdress);
      dispatch(setUserBalance(getBalancesResponse));

      const transactionHash = await testSendMoneyToAccount(
        recipientAddress,
        activeAccount!,
        convertAptToOcta(transferAmount)
      );

      setIsSuccess(true);
      mixpanel.track("successful_transaction");
    } catch (error) {
      console.error("Failed to send money:", error);
      setTransferError("Transaction failed. Please try again.");
      mixpanel.track("failed to send money", {
        error: error,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // THIS IS JUST A SAMPLE EXAMPLE // NEEDS TO BE COMMENTED OUT
  const sendStableMoney = async (recipientAddress: any) => {
    try {
      if (!recipientAddress) {
        throw new Error("Active account is not provided.");
      }

      const hash = await sendStablePayment(
        recipientAddress,
        0.1,
        activeAccount!
      );
      console.log(hash);
    } catch (error) {
      console.error("Failed to send money:", error);
    }
  };
  // ENDS HERE

  const isTransferDisabled =
    transferError !== "" ||
    transferAmount === "" ||
    parseFloat(transferAmount) <= 0 ||
    isLoading ||
    !recipientAddress ||
    !(
      !isValidWalletAddress(recipientAddress) ||
      !isValidCustomText(recipientAddress)
    );

  const formatBalance = (amount: number, decimals: number = 6) => {
    return (amount / 1e8).toFixed(decimals);
  };

  return (
    <div
      className="modal modal-open fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-box bg-gray-800 text-white max-w-sm relative p-6">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Transfer APT</h3>
        <div className="flex flex-col items-center gap-4">
          {/* Show recipient address and gas fees */}
          {recipientAddress && (
            <>
              <p className="text-sm text-white">Recipient:</p>
              <input
                type=""
                placeholder="Receipient"
                className="input input-bordered input-primary w-full"
                value={recipientAddress}
                disabled={true}
              />
              {/* gas fees currently hardcoded */}
              <p className="text-sm text-white">Gas Fee: 0.01 APT</p>
            </>
          )}
          <div className="w-full">
            <input
              type="number"
              placeholder="Enter amount of APT"
              className="input input-bordered input-primary w-full"
              value={transferAmount}
              onChange={handleTransferAmountChange}
              disabled={isLoading || isSuccess || paymentviaDynamicQR}
            />
            {transferError && (
              <p className="text-error text-sm mt-1">{transferError}</p>
            )}
          </div>
          <p className="text-sm">
            Balance: {formatBalance(balance[0]?.amount)} APT
          </p>

          {!recipientAddress && (
            <p className="text-sm text-red-500">
              Please enter address or Nexus id
            </p>
          )}

          {isSuccess ? (
            <div className="text-green-500 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Transaction Successful!
            </div>
          ) : (
            <button
              className="btn btn-primary w-full"
              onClick={() => sendMoney(recipientAddress)}
              disabled={isTransferDisabled}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Send"
              )}
            </button>
          )}
          {/* THIS IS JUST A SAMPLE EXAMPLE // NEEDS TO BE COMMENTED OUT */}
          <button
            className="btn btn-primary w-full"
            onClick={() => sendStableMoney(recipientAddress)}
          >
            Send Stable
          </button>
          {/* ENDS HERE */}
        </div>
      </div>
    </div>
  );
};

export default TransferModal;
