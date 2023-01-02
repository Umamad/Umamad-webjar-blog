import Image from "next/image";
import { Grid, Typography } from "@mui/material";

import PostListItemContainer from "../containers/PostListItem.container";
import PrimaryButton from "../buttons/Primary.buttons";

import UserIcon from "../icons/user.icon";
import MessageIcon from "../../public/images/icons/message.svg";
import CalendarIcon from "../../public/images/icons/calendar.svg";

const PostListItem = ({ post }) => {
  const { title, introImageUrl, body, author, commentCount, createdAt } = post;
  const imageUrl = new URL(introImageUrl.path, introImageUrl.host).href;

  let options = { year: "numeric", month: "long", day: "numeric" };
  let date = new Date(createdAt).toLocaleDateString("fa-IR", options);

  return (
    <PostListItemContainer container>
      <Grid item>
        <Image
          src={imageUrl}
          loader={({ src }) => src}
          alt={title}
          loading="lazy"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid item>
        <Typography variant="h6" component="h6">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <Grid container justifyContent='space-between'>
          <Typography
            variant="subtitle1"
            display="flex"
            alignItems="center"
            columnGap={1}
            component='span'
          >
            <Image src={CalendarIcon} alt="calendar icon" />
            {date}
          </Typography>
          <Typography
            variant="subtitle1"
            display="flex"
            alignItems="center"
            columnGap={1}
            component='span'
          >
            <Image src={MessageIcon} alt="message icon" />
            {commentCount} نفر
          </Typography>
          <Typography
            variant="subtitle1"
            display="flex"
            alignItems="center"
            columnGap={1}
            component='span'
          >
            <UserIcon
              style={{
                fill: "#000",
              }}
            />
            {author}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <PrimaryButton variant="contained">بیشتر</PrimaryButton>
      </Grid>
    </PostListItemContainer>
  );
};

export default PostListItem;
