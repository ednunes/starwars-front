import starwars_logo from '../../assets/icons/starwars_logo.svg';
import brazil_logo from '../../assets/icons/brazil_flag.svg';
import sith_logo from '../../assets/icons/sith_logo.svg';
import Navbar from '../Navbar';
import * as S from './styles';

function Header() {
  function changeTheme() {
    console.log('Change theme');
  }

  function changeLanguage() {
    console.log('Change language');
  }
  return (
    <S.Header>
      <a href='#'>
        <img width='110' height='80' src={starwars_logo} alt='starwars_logo' />
      </a>
      <Navbar />
      <S.Actions>
        <S.IconButton onClick={() => changeTheme()}>
          <img width='30' height='80' src={sith_logo} alt='sith_logo' />
        </S.IconButton>
        <S.IconButton onClick={() => changeLanguage()}>
          <img width='30' height='80' src={brazil_logo} alt='brazil_logo' />
        </S.IconButton>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
