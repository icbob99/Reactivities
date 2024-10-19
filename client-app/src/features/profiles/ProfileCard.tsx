
import { Card, Icon, Image } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import { Link } from 'react-router-dom';

interface Props {
    profile: Profile;
}

const ProfileCard = function ProfileCard({ profile }: Props) {
    return (
        <Card as={Link} to={`profiles/${profile.username}`}>
            <Image src={profile.image || '/assets/user.png'} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{profile.displayName}</Card.Header>
                {/* <Card.Meta>
                    <span className='date'>Joined in {profile.joinDate}</span>
                </Card.Meta> */}
                {/* <Card.Description>{profile.bio}</Card.Description> */}
                <Card.Description>Bio goes here</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                20 followers
            </Card.Content>
        </Card>
    );
};

export default ProfileCard;
ProfileCard.displayName = 'ProfileCard';