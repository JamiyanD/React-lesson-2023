export default function Header(props) {
  console.log(props.wishlist);

  return (
    <div className="ui menu">
      <div className="right menu">
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            <i className="heart icon ">{props.wishlist.length}</i>
            <i class="dropdown icon"></i>
            <div class="menu">
              {props.wishlist.map((w, index) => {
                return (
                  <div>
                    {w.name}
                    <button
                      class="ui button"
                      onClick={() => {
                        props.setWishList(
                          props.wishlist.filter((a) => w.id !== a.id)
                        );
                      }}
                    >
                      <i className="close icon"> </i>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <a className="item">
          <i className="shopping basket icon"></i>
        </a>
      </div>
    </div>
  );
}
