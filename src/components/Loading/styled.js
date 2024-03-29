import styled from 'styled-components';

export const WrapperLoading = styled.div`
  position: absolute;
  top: calc(50% + 3rem);
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(2.143rem, 1.25rem + 2.5vw, 2.857rem);
  aspect-ratio: 1;
  --c: linear-gradient(#000 0 0);
  --r1: radial-gradient(farthest-side at bottom,#000 93%,#0000);
  --r2: radial-gradient(farthest-side at top   ,#000 93%,#0000);
  background:
    var(--c) ,var(--r1),var(--r2),
    var(--c) ,var(--r1),var(--r2),
    var(--c) ,var(--r1),var(--r2);
  background-repeat: no-repeat;
  animation: l2 1s infinite alternate;

  &.middle-component {
    top: 50%;
  }

  &.small-component {
    width: clamp(2.143rem, 1.25rem + 2.5vw, 2.357rem);
  }

  @keyframes l2 {
    0%,25% {
      background-size: 8px 0,8px 4px,8px 4px,8px 0,8px 4px,8px 4px,8px 0,8px 4px,8px 4px;
      background-position: 0 50%,0 calc(50% - 2px),0 calc(50% + 2px),50% 50%,50% calc(50% - 2px),50% calc(50% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
  }
  50% {
      background-size: 8px 100%,8px 4px,8px 4px,8px 0,8px 4px,8px 4px,8px 0,8px 4px,8px 4px;
      background-position: 0 50%,0 calc(0% - 2px),0 calc(100% + 2px),50% 50%,50% calc(50% - 2px),50% calc(50% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
  }
  75% {
      background-size: 8px 100%,8px 4px,8px 4px,8px 100%,8px 4px,8px 4px,8px 0,8px 4px,8px 4px;
      background-position: 0 50%,0 calc(0% - 2px),0 calc(100% + 2px),50% 50%,50% calc(0% - 2px),50% calc(100% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
  }
  95%,100% {
      background-size: 8px 100%,8px 4px, 8px 4px,8px 100%,8px 4px,8px 4px,8px 100%,8px 4px,8px 4px;
      background-position: 0 50%,0 calc(0% - 2px),0 calc(100% + 2px),50% 50%,50% calc(0% - 2px),50% calc(100% + 2px),100% 50%,100% calc(0% - 2px),100% calc(100% + 2px);
  }
  }
`;
