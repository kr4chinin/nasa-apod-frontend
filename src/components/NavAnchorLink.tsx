import { FC } from "react"

interface AnchorLinkProps {
    href: string
    title: string
}

const AnchorLink: FC<AnchorLinkProps> = ({href, title}) => {
	return (
		<a
			href={href}
			rel="noreferrer"
			target="_blank"
			className="navbar-item"
		>
            {title}
        </a>
	)
}

export default AnchorLink
