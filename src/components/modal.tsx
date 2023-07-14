import React, { useEffect, useState } from "react";
import { ModalPost } from "../styles/Modal.style";
import { IComments } from "../interfaces/Comments.type";
import axios from "axios";
import "./modal.css";
import { RedButton, GreenButton } from "../styles/Button.style";
import Comment from "./comment";

export default function Modal({ postId }: { postId: number }) {
  const [modal, setModal] = useState(false);
  const [comments, setComments] = useState<IComments[] | null>(null);
  const [comment, setComment] = useState<IComments | null>();

  const [error, setError] = useState({});

  useEffect(() => {
    getComments();
  }, []);

  function getComments() {
    const options = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/comments",
      params: { category: "all", count: "100" },
      headers: {
        "X-RapidAPI-Key": "your-rapid-key",
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function ({ data }: { data: IComments[] }) {
        setComments(data);
      })
      .catch(function (error: any) {
        console.error(error);
        setError(error);
      });
  }

  function getComment() {
    const comment = comments?.find((obj) => {
      return obj.id == postId;
    });
    setComment(comment);
  }

  const toggleModal = () => {
    setModal(!modal);
    getComments();
    getComment();
  };

  return (
    <>
      <GreenButton onClick={toggleModal}> VIEW </GreenButton>

      {modal && (
        <div className="overlay">
          <div className="modal-content">
            <h2> Post Detail Information</h2>
            <Comment key={comment?.id} commentId={comment?.id} />
            <RedButton onClick={toggleModal}> CLOSE </RedButton>
          </div>
        </div>
      )}
    </>
  );
}
