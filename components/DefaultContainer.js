import HeaderBar from "./HeaderBar";
import Head from "next/head";

const DefaultContainer = ({ children, className }) => {
    return (<div className="p-0 m-0 bg-black w-full min-h-screen ${className}">
        <Head>
            <title>Kernspaltung</title>
            <meta name="Description" content="Sollten wir Energie durch Atomkraft erzeugen oder ist Kernspaltung gefährlicher als andere Energiequellen?"></meta>
        </Head>
        <HeaderBar />
        <div className={`mx-auto p-16 self-center hidden lg:block ${className}`} style={{
            width: "1200px",
            maxWidth: "100%",
            minHeight: "8000px"
        }}>
            {children}
        </div>
        <div className="p-8 pt-28 block lg:hidden text-white">
            <p className="font-bold text-2xl">
                Diese Seite ist nicht für Mobilgeräte optimiert.<br /><br />
                Gehe mit deinem Computer auf kernspaltung.vercel.app, um diese Webseite anzusehen
            </p>
        </div>
    </div>)
}

export default DefaultContainer;