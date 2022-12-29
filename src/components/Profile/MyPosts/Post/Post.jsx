import s from './Post.module.css';
import avaPost from '../../../../img/ava.jpg'

const Post = (props) => {
    return (
        <div className={s.item}>
          <div className={s.avaPost}>
            <img className={s.img} src={avaPost} alt="don't load"/>
            </div>
          <div className={s.messagePost}>
            <div className={s.message}>{props.message}</div>
            <div className={s.likeCounter}>
              <span> like </span>
              <span>{props.like}</span>
            </div>
          </div> 
        </div>
    );
}

export default Post;