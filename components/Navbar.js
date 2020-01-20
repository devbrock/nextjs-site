export const Navbar = () => {
    return (
        <ul class="flex bg-blue-900 p-4">
            <li class="mr-6">
                <a class="font-medium text-gray-200 hover:text-blue-800" href="/">Home</a>
            </li>
            <li class="mr-6">
                <a class="font-medium text-gray-200 hover:text-blue-800" href="/about">About</a>
            </li>
            <li class="mr-6">
                <a class="font-medium text-gray-200 hover:text-blue-800" href="/blog">Blogs</a>
            </li>
        </ul>
    );
}

export default Navbar;