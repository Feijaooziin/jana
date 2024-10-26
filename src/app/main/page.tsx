import Footer from "@/app/footer";
import Header from "@/app/header";

export default function Main(props: any) {
    return (
        <div className="flex flex-col h-screen">
             <Header />

             <div className="flex flex-1 justify-center">
                <main className="w-full">{props.children}</main>
             </div>
             
             <Footer />
        </div>
      );
}