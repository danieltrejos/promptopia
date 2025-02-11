import '@styles/globals.css'
import { Nav, Provider } from '@components';

export const metadata = {
    title: "Promptopia",
    description: "Discover and Share AI Prompts"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout