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
    // process date from the wordpress api into requested format
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
      ];
    const postDate = new Date(props.date);
    const postDay = postDate.getDay();
    const postMonth = postDate.getMonth();
    const postYear = postDate.getFullYear();

    return (
        <div className="p-card--highlighted col-4 blog-card">
            <header>
                <h5 style={{fontWeight: 300}}>{props.topic.toUpperCase()}</h5>
            </header>
            <hr className="is-muted"/>
            <div className="p-card__content">
                <a href={props.postURL}><img src={props.img} className="p-card__image"/></a>
                <a href={props.postURL}><h3 style={{fontWeight: 400}}>{props.title}</h3></a>
                <p><em>By <a href={props.authorURL}>{props.author}</a> on {`${postDay} ${monthNames[postMonth]} ${postYear}`}</em></p>

            </div>
            <hr className="is-muted footer-hr"/>
            <footer>
                <p className="u-no-margin--bottom">{props.category}</p>
            </footer>
        </div>
    )
}

export default BlogCard