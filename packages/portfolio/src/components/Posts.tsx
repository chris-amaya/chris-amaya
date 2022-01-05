import {Tag} from '.'

export function Posts() {
  return (
    <div className="Posts">
      <div className="card">
        <div className="card-content">
          <div className="card-text">
            <div className="title">
              <h1>Post 1</h1>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                vel aspernatur porro, id laudantium voluptatem.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                atque natus, reprehenderit dolorem quae voluptas.
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                minus iusto numquam expedita, officia nemo quaerat ea magni
                necessitatibus error distinctio possimus non.
              </p>
            </div>

            <div className="footer">
              <div className="date">
                <p>25/05/2021</p>
              </div>
              <div className="tags">
                <Tag text="Tag 1" />
                <Tag text="Tag 2" />
                <Tag text="Tag 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="card-text">
            <div className="title">
              <h1>Post 2</h1>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                accusantium, sit numquam ipsum, voluptatem, sequi hic ea nostrum
                distinctio id cumque nobis excepturi nemo vero mollitia sed
                explicabo dolore a illo dolores!
              </p>
            </div>

            <div className="footer">
              <div className="date">
                <p>25/05/2021</p>
              </div>
              <div className="tags">
                <Tag text="Tag 1" />
                <Tag text="Tag 2" />
                <Tag text="Tag 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="card-text">
            <div className="title">
              <h1>Post 1</h1>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                vel aspernatur porro, id laudantium voluptatem.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                atque natus, reprehenderit dolorem quae voluptas.
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                minus iusto numquam expedita, officia nemo quaerat ea magni
                necessitatibus error distinctio possimus non.
              </p>
            </div>

            <div className="footer">
              <div className="date">
                <p>25/05/2021</p>
              </div>
              <div className="tags">
                <Tag text="Tag 1" />
                <Tag text="Tag 2" />
                <Tag text="Tag 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
