import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SearchResultModal from "./SearchResultModal";
import styles from "./style/search.module.css";
import { showResultModal, fetchSearch } from "../../actions/fetchSearch";

function Search() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.search.show);
  const lang = useSelector((state) => state.lang);

  const [keyword, setKeyword] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const dropdownContent = useRef();

  const handleOpenSearchPanel = () => {
    if (dropdownContent.current.style.display === "none") {
      dropdownContent.current.style.display = "block";
    } else {
      dropdownContent.current.style.display = "none";
    }
  };

  const handleSubmit = (e) => {
    dispatch(fetchSearch(keyword, lang, from, to));
    dispatch(showResultModal());
    dropdownContent.current.style.display = "none";
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn} onClick={handleOpenSearchPanel}>
          &#8981;
        </button>
        <div className={styles.dropdownContent} ref={dropdownContent}>
          <Form validated onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search for</Form.Label>
              <Form.Control
                type="text"
                placeholder="Keyword..."
                onChange={(e) => setKeyword(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                E.g. sports, politics,...
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>From</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setFrom(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setTo(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Go
            </Button>
          </Form>
        </div>
      </div>

      {show && <SearchResultModal keyword={keyword} />}
    </>
  );
}

export default Search;
