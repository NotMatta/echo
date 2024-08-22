const Layout = ({children}) => {
    return(
        <div className="w-screen h-screen border h-screnn flex justify-center items-center">
            <div className="border rounded-xl box-border p-4">
                {children}
            </div>
        </div>
    )
}

export default Layout
