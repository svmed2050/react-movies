// у Header не будет никаких состояний, поэтому мы сделаем его функциональным компонентом

function Header() {
    return <nav className="#43a047 green darken-1">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">React Movies</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="!#">Repo</a></li>
      </ul>
    </div>
  </nav>
}

export {Header};