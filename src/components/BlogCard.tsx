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
                <h5>{props.topic}</h5>
            </header>
            <div>
                <a href={props.postURL}><img src={props.img}/></a>
                <a href={props.postURL}><h3>{props.title}</h3></a>
                <p>By <a href={props.authorURL}>{props.author}</a> on {props.date}</p>
            </div>
            <footer>
                <p>{props.category}</p>
            </footer>
        </div>
    )
}

export default BlogCard