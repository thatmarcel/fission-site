import Link from "next/link";

const HeaderBar = () => {
    return (
        <div className="w-full h-16 border-gray-800 flex fixed bg-black" style={{
            borderBottomWidth: "1px"
        }}>
            <div className="mx-auto px-8 self-center" style={{
                width: "1000px",
                maxWidth: "100%"
            }}>
                <Link href="/">
                    <a className="text-gray-200 font-bold text-lg" style={{
                        textDecoration: "none"
                    }}>
                        Kernspaltung
                    </a>
                </Link>
                <span className="text-gray-400 font-semibold text-lg float-right hidden md:block">
                    Naturwissenschaft und Technik
                </span>
                <span className="text-gray-400 font-semibold text-lg float-right block md:hidden">
                    NwT
                </span>
            </div>
        </div>
    )
}

export default HeaderBar;