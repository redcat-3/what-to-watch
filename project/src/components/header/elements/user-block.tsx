import { useAppDispatch } from '../../../hooks';
import { logoutAction } from '../../../store/api-actions';
import { redirectToRoute } from '../../../store/action';
import { AppRoute } from '../../../const';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClickSignOut = () => {
    dispatch(logoutAction());
  };
  const handleClickAvatar = () => {
    dispatch(redirectToRoute(AppRoute.MyList));
  };
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" onClick={handleClickAvatar} />
        </div>
      </li>
      <li className="user-block__item" onClick={handleClickSignOut}>
        <div className="user-block__link">Sign out</div>
      </li>
    </ul>
  );
}
export default UserBlock;
