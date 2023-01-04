import '../styles/globals.css'
import {Fira_Code} from '@next/font/google'

const fira = Fira_Code({
    variable: '--font-fira'
});

export default function RootLayout({children}) {
    return(
        <html lang='en' className={fira.className}>
            <head>
                <title>Shukur Huseynli</title>
            </head>
            <body className='p-10 h-screen bg-black-darky' >
                <div className='h-full bg-vscode rounded-2xl'>
                    {children}
                </div>
            </body>
        </html>
    )
}