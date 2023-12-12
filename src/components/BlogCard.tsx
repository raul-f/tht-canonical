type BlogCardProps = {
    topic: string,
    postURL: string,
    img: string,
    title: string,
    author: string,
    authorURL: string,
    date: string,
    category: string
  }

const BlogCard = (props: BlogCardProps) => {
    return (
        <div>
            <header>
                <h5></h5>
            </header>
            <div>
                <a><img/></a>
                <h3></h3>
                <p></p>
            </div>
            <footer>
                <p></p>
            </footer>
        </div>
    )
}

export default BlogCard