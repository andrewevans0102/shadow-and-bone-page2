import { Link } from 'remix';

export default function GlobalNav() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>{' '}
            </li>
            <li>
                <Link to="/glossary">Glossary</Link>
            </li>
            <li>
                <Link to="/characters">Characters</Link>
            </li>
            <li>
                <Link to="/locations">locations</Link>
            </li>
        </ul>
    );
}
