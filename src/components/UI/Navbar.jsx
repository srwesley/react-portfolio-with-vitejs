export default function Nav({ links }) {
    return (
        <nav>
            <div>
                <h3>Sarah Wesley</h3>
                <div>
                    <ul>
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}