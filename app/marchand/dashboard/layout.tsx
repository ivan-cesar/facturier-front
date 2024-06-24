import NavDashboard from "@/components/marchand-widget/NavDashboard";

function checkUserRole(){
    return "user";
}

export default function Layout({
                                   children,
}: {
    children: React.ReactNode,
}) {

    const role = checkUserRole()

    return (
        <div className="grid grid-cols-12">
            <div
                className="col-span-2 border-r border-gray-400/30 p-5 dark:bg-blue-950/15 dark:border-r dark:border-blue-950/50 bg-white h-screen">
                <NavDashboard/>
            </div>
            <div className="col-span-10 px-10 pt-5 h-screen overflow-y-auto bg-green-100/20 dark:bg-none">
                {children}
            </div>
        </div>
    );
}
