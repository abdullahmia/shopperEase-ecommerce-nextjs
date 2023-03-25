import Link from "next/link";
import { useRouter } from 'next/router';

const Index = ({ href, children, activeClassName, klassName }) => {
    const router = useRouter();
    const isActive = router.pathname === href;

    const className = `${isActive ? activeClassName : klassName}`

    return (
        <Link href={href} className={className}>{children}</Link>
    )
};

export default Index;