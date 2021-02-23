import HeaderBar from "./HeaderBar";

const DefaultContainer = ({ children, className }) => (
    <div className="p-0 m-0 bg-black w-full min-h-screen ${className}">
        <HeaderBar />
        <div className={`mx-auto p-16 self-center hidden lg:block ${className}`} style={{
            width: "1200px",
            maxWidth: "100%",
            minHeight: "7000px"
        }}>
            {children}
        </div>
        <div className="p-8 pt-28 block lg:hidden text-white">
            <p className="font-bold text-2xl">
                Diese Seite ist nicht für Mobilgeräte optimiert.<br /><br />
                Gehe mit deinem Computer auf kernspaltung.vercel.app, um diese Webseite anzusehen
            </p>
        </div>
    </div>
)

export default DefaultContainer;