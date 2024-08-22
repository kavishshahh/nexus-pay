import Layout from "@/components/Layout/Layout";
import ReceiveModal from "@/components/ReceiveModal/ReceiveModal";
import ScannerModal from "@/components/ScannerModal/ScannerModal";
import TransferModal from "@/components/TransferModal/TransferModal";
import { getBalances } from "@/core/transactions";
import { divideByTenMillion } from "@/core/utils";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home: NextPage = () => {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [transferAmount, setTransferAmount] = useState("");
  const [transferError, setTransferError] = useState("");

  const { activeAccount } = useSelector((state: any) => state.authSlice);
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecipientAddress(event.target.value);
  };

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const fetchBalances = async () => {
      if (activeAccount) {
        const getBalancesResponse = await getBalances(activeAccount);
        console.log(divideByTenMillion(getBalancesResponse[0]?.amount));

        setBalance(divideByTenMillion(getBalancesResponse[0]?.amount));
      }
    };

    fetchBalances();
  }, [activeAccount]);

  const handleGoogleSignIn = () => {
    router.push("/LoginPage");
  };

  // if (!activeAccount) {
  //   return (
  //     <Layout>
  //       <Head>
  //         <title>Create Account | Nexus</title>
  //         <link rel="icon" href="/favicon.ico" />
  //       </Head>
  //       <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
  //         <div className="text-sm text-gray-400 mb-4">01 A NEW WEB3 WALLET</div>
  //         <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
  //           CREATE YOUR NEXUS ACCOUNT
  //           <br />
  //           WITH A SINGLE CLICK
  //         </h1>
  //         <p className="text-center mb-8 max-w-2xl">
  //           Nexus Connect is the Nexus account manager that connects you
  //           to your favorite apps with no downloads required.
  //         </p>
  //         <button
  //           className="bg-white text-black py-2 px-4 rounded-full flex items-center"
  //           onClick={handleGoogleSignIn}
  //         >
  //           <img src="/google-icon.png" alt="Google" className="w-6 h-6 mr-2" />
  //           CONTINUE WITH GOOGLE
  //         </button>
  //       </main>
  //     </Layout>
  //   );
  // }

  return (
    <Layout>
      <Head>
        <title>Transfer | NexusPay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center px-4 py-12 text-center lg:mr-[10px]">
        <h1 className="mb-8 mt-8 text-4xl font-bold text-secondary">
          Landing <span className="text-white">Page</span>
        </h1>
      </main>
    </Layout>
  );
};

export default Home;
