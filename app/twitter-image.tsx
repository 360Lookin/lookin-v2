import { createSocialImage, socialImageSize } from "./_social-image";

export const alt = "Lookin — A better website, without the usual hassle";
export const size = socialImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return createSocialImage();
}
