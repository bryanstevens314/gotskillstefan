import '../public/assets/vendor/vl-nav/css/core-menu.css';
import '../public/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../public/assets/css/globals.css';
import '../public/assets/css/app.css';
import '../public/assets/css/custom.css';
import Footer from 'components/Footer';
import Header from 'components/Header';

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Lora:400i" rel="stylesheet" />
            </head>
            <body>
                <Header />
                {children}

                <Footer />
                <script src="/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
            </body>
        </html>
    );
}
