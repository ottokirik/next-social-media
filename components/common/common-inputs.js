import {
  Form,
  Button,
  Message,
  TextArea,
  Divider,
  Transition,
  Segment,
} from 'semantic-ui-react';

export const CommonInputs = ({
  user: { bio, facebook, twitter, instagram, youtube },
  handleChange,
  showSocialLinks,
  setShowSocialLinks,
}) => {
  return (
    <>
      <Form.Field
        required
        control={TextArea}
        name="bio"
        value={bio}
        onChange={handleChange}
        placeholder="bio"
      />

      <Button
        content="Add Social Links"
        color="red"
        icon="at"
        type="button"
        onClick={() => setShowSocialLinks(!showSocialLinks)}
      />

      <Transition
        visible={showSocialLinks}
        animation="slide left"
        duration={300}
      >
        <Segment>
          <Divider />
          <Form.Input
            icon="facebook f"
            iconPosition="left"
            name="facebook"
            value={facebook}
            onChange={handleChange}
          />

          <Form.Input
            icon="twitter"
            iconPosition="left"
            name="twitter"
            value={twitter}
            onChange={handleChange}
          />

          <Form.Input
            icon="instagram"
            iconPosition="left"
            name="instagram"
            value={instagram}
            onChange={handleChange}
          />

          <Form.Input
            icon="youtube"
            iconPosition="left"
            name="youtube"
            value={youtube}
            onChange={handleChange}
          />

          <Message
            icon="attention"
            info
            size="small"
            header="Social Media Links Are Optional!"
          />
        </Segment>
      </Transition>
    </>
  );
};
