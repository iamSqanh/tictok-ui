import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1679752800&x-signature=H5cpz1eo8Oea22BbUDNROy1cWzY%3D"
                    alt="error"
                />
                <Button className={cx('follow-btn')} primary>
                    follow
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    <strong>anhsamquoc</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>sam quoc anh</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>follower</span>
                    <strong className={cx('value')}>12.2M </strong>
                    <span className={cx('label')}>follower</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
