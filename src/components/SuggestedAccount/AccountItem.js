import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import styles from './SuggestedAccount.module.scss';

import AccountPreview from './AccountPreview';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/737c3efd598749faa88244fbab56d368~c5_100x100.jpeg?x-expires=1679749200&x-signature=sKitLUV1nF4NWj8S5Fm%2B8sPmjk8%3D"
                        alt="error"
                    />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            <strong>anhsamquoc</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('name')}>sam quoc anh</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
