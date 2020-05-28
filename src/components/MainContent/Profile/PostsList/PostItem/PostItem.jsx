import React from "react";
import s from './PostItem.module.css';

function PostItem(props) {

    return (
        <div className={s.Post}>
            <img
                src="data:image/jpeg;base64,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"
                alt=""/>
            <div>
                {props.PostItemData.message}
            </div>
            <div className={s.like}>
                <span>
                    лойз <span className={s.likeCounter}>{props.PostItemData.likeCounter}</span>
                </span>
            </div>
        </div>
    );
}

export default PostItem;