export function createArrows() {
  return `
             <div
            class="swiper-button-prev custom-prev visually-hidden"
            aria-label="Предыдущее время погоды"
          >
            <svg
              class="arrow-left"
              aria-hidden="true"
              viewBox="0 0 15 27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="arrow-left_circle"
                cx="7.5"
                cy="13.5"
                r="5.625"
                fill="#E0E0E0"
              />
              <g
                transform="translate(7.5 13.5) scale(0.6667) translate(-2.5 -4.5)"
              >
                <path
                  d="M1.46,6.75 L1.25,6.55 L3.33,4.5 L1.25,2.45 L1.46,2.25 L3.75,4.5 L1.46,6.75 Z"
                  fill="none"
                  stroke="#3F51B5"
                  stroke-width="0.2"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
          
          <div
            class="swiper-button-next custom-next visually-hidden"
            aria-label="Следующее время погоды"
          >
            <svg
              class="arrow-right"
              aria-hidden="true"
              viewBox="0 0 15 27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="arrow-right__circle"
                cx="7.5"
                cy="13.5"
                r="5.625"
                fill="#E0E0E0"
              />
              <g
                transform="translate(7.5 13.5) scale(0.6667) translate(-2.5 -4.5)"
              >
                <path
                  d="M1.46,6.75 L1.25,6.55 L3.33,4.5 L1.25,2.45 L1.46,2.25 L3.75,4.5 L1.46,6.75 Z"
                  fill="none"
                  stroke="#3F51B5"
                  stroke-width="0.2"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
       `;
}
