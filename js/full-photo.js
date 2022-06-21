import { createElement } from './util.js';

const showBigPicture = (usersPictures) => {
  const miniPictures = document.querySelectorAll('.picture');
  const bigPicture = document.querySelector('.big-picture');
  const bigPictureImage = document.querySelector('.big-picture__img img');
  const likesCount = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const socialComments = bigPicture.querySelector('.social__comments');
  const pictureDescription = bigPicture.querySelector('.social__caption');
  const body = document.querySelector('body');
  const WIDTH = 35;
  const HEIGHT = 35;

  const similarUserFragment = document.createDocumentFragment();

  for (let i = 0; i<miniPictures.length; i++) {
    miniPictures[i].addEventListener('click', () => {
      const currentUserPicture = usersPictures[i];
      bigPictureImage.src = currentUserPicture.url;
      bigPictureImage.alt = currentUserPicture.description;
      likesCount.textContent = currentUserPicture.likes;
      commentsCount.textContent = currentUserPicture.comments.length;

      for (let j = 0; j < currentUserPicture.comments.length; j++) {
        const userComment = createElement('li', 'social__comment');
        const userCommentImage = createElement('img', 'social__picture');
        const userCommentText = createElement('p', 'social__text');
        userCommentImage.src = currentUserPicture.comments[j].avatar;
        userCommentImage.alt = currentUserPicture.comments[j].name;
        userCommentImage.style.width = WIDTH;
        userCommentImage.style.height = HEIGHT;
        userComment.append(userCommentImage);
        userCommentText.textContent = currentUserPicture.comments[j].messages;
        userComment.append(userCommentText);
        similarUserFragment.append(userComment);
      }

      socialComments.innerHTML = '';
      socialComments.append(similarUserFragment);
      pictureDescription.textContent = currentUserPicture.description;
      bigPicture.classList.remove('hidden');
      bigPicture.querySelector('.social__comment-count').classList.add('hidden');
      bigPicture.querySelector('.comments-loader').classList.add('hidden');
      body.classList.add('modal-open');
    });
  }
};

export {showBigPicture};
