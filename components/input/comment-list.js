import classes from "./comment-list.module.css";

function CommentList() {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Vincent</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Anjiri</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
