import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
  return (
    <>
      <span className="flex flex-row justify-end gap-5 p-5 items-center">
        <a href="/">Home</a>
        <a href="/login">About</a>
        <a href="/login">Contact us</a>
        <a href="/login">Login</a>
        <ThemeSwitcher />
      </span>
    </>
  )
}
export default Navbar
