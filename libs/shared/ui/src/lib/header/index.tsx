
/* eslint-disable-next-line */
export interface HeaderProps {
  links?: Link[]
}

export interface Link{
  label: string,
  href: string
}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full bg-none">
      <div className="max-w-screen-xl flex justify-between h-16 mx-auto">
        <div id="">
          LOGO
        </div>
        <nav>
          <ul className="flex gap-4">
            { (props.links && props.links?.length > 0) &&
              props.links?.map((link: Link, index) => (
                <li key={index}><a href={link.href}>{link.label}</a></li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
