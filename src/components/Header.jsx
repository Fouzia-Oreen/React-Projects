
const Header = () => {
  return (
    <header className="fixed top-0 w-full flex items-center justify-evenly bg-neutral-900 py-2 text-neutral-500 ">
      <div className="logo"></div>
      <nav >
        <ul className="flex items-center gap-8 text-lg font-semibold">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header