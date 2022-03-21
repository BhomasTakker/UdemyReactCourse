import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comment from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

// const DUMMY_DATA = [
//   {
//     id: "q1",
//     author: "Bhomas",
//     text: "Learning React is something",
//   },
//   {
//     id: "q2",
//     author: "Boomas",
//     text: "Learning Node is something else",
//   },
// ];

const QuoteDetails = () => {
  const match = useRouteMatch();
  const id = useParams().quoteId;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);
  // const quote = DUMMY_DATA.find((quote) => quote.id === id);

  if (status === "pending") {
    return (
      <div className="pending">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  console.log(match);

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route path={match.path} exact>
          <div className="centered">
            <Link className="btn--flat" to={`/comment`}>
              Add Comments
            </Link>
          </div>
        </Route>

        <Route path={`/comment`}>
          <Comment></Comment>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default QuoteDetails;
