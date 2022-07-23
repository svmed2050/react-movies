
function Footer() {
    return <footer className="page-footer #c5e1a5 light-green lighten-3">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
            </div>
          </div>
        </footer>

}

export {Footer};