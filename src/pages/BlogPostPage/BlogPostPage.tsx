import { useNavigate, useParams } from "react-router-dom"


export default function BlogPostPage(){
    const {id, title, content} = useParams()
    const navigate = useNavigate()

    return(
        <>
            <h2>{title}</h2>
             {/*Sub Dynamic Page: Show Particular BlogPost*/}
            <div>
                <h3>{id}</h3>
                <p>{content}</p>
            </div>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    )
}