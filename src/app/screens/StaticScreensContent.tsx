import Image from "next/image";
const BasePath = "/assets/images/screens/Bonuses/";
const ScreenStyle_ = {
  bonuses: {
    boldColor: "bg-yellow-400 font-bold",
  },
};

export type BonusCard_ = (typeof GlobalContent.screens.bonuses.cards)[number];

const GlobalContent = {
  screens: {
    bonuses: {
      steps: [
        {
          status: "success",
          content: "<strong>Привяжи</strong> к профилю аккаунт ВКонтакте.",
        },
        {
          status: "error",
          content: "<strong>Вступи</strong> в нашу группу ВКонтакте.",
        },
        {
          status: "error",
          content: "<strong>Напиши сообщение</strong> нашему сообществу.",
        },
        {
          status: "error",
          content: '<strong>Сделай</strong> <a href="javascript:;">репост записи на свою страницу.</a>',
        },
        {
          status: "info",
          content: "Ваша страница ВКонтакте должна быть публичной, иначе мы не сможем проверить наличие репоста.",
        },
        {
          status: "info",
          content: "При удалении поста ранее, чем через 2 недели после репоста сумма бонуса будет вычтена с баланса.",
        },
      ],
      post: [
        [
          <div>
            {" "}
            <h2> asdasdasdasdasdas</h2>
            <h3>asdasdasdasdasd</h3>
          </div>,
        ],
        [<span>sasdasdas</span>, <span>sadsasd asfd</span>, <span>;alkjsd;lajks sdgt adfa adf</span>],
      ],
      cards: [
        {
          id: "asdasfafs",
          rows: 1,
          btnText: "press me",
          bgImage: `${BasePath}card_bg_images/loyalty.png`,
          data: [
            [<h1>sadasdasd asd</h1>],
            [
              <p>
                {" "}
                asdasd asdasd <span className={ScreenStyle_.bonuses.boldColor}>p</span> asfas{" "}
              </p>,
              <span>sdasd asdas</span>,
            ],
            [
              <span>
                Send any message to our VKontakte group, thereby allowing notifications to be sent. A pleasant surprise - we will
                periodically send information about promotions and various bonuses!
              </span>,
            ],
          ],
        },
        {
          id: "000asfafs",
          rows: 1,
          btnText: "press me",
          bgImage: `${BasePath}card_bg_images/review.svg`,
          data: [
            [<h1>sadasdasd asd</h1>],
            [
              <p>
                {" "}
                asdasd asdasd <span className={ScreenStyle_.bonuses.boldColor}>p</span> asfas{" "}
              </p>,
              <span>sdasd asdas</span>,
            ],
            [
              <span>
                Send any message to our VKontakte group, thereby allowing notifications to be sent. A pleasant surprise - we will
                periodically send information about promotions and various bonuses!
              </span>,
            ],
          ],
        },
        {
          id: "0aklsjafs",
          rows: 1,
          btnText: "press me",
          bgImage: `${BasePath}card_bg_images/subscribe.svg`,
          data: [
            [<h1>sadasdasd asd</h1>],
            [
              <p>
                {" "}
                asdasd asdasd <span className={ScreenStyle_.bonuses.boldColor}>p</span> asfas{" "}
              </p>,
              <span>sdasd asdas</span>,
            ],
            [
              <span>
                Send any message to our VKontakte group, thereby allowing notifications to be sent. A pleasant surprise - we will
                periodically send information about promotions and various bonuses!
              </span>,
            ],
          ],
        },
        {
          id: "0989-0asdfs",
          rows: 1,
          btnText: "press me",
          bgImage: `${BasePath}card_bg_images/group.svg`,
          data: [
            [<h1>sadasdasd asd</h1>],
            [
              <p>
                {" "}
                asdasd asdasd <span className={ScreenStyle_.bonuses.boldColor}>p</span> asfas{" "}
              </p>,
              <span>sdasd asdas</span>,
            ],
            [
              <span>
                Send any message to our VKontakte group, thereby allowing notifications to be sent. A pleasant surprise - we will
                periodically send information about promotions and various bonuses!
              </span>,
            ],
          ],
        },

        {
          id: "fgjdry699dfs",
          rows: 2,
          btnText: "press me",
          bgImage: `${BasePath}card_bg_images/partner.png`,
          data: [
            [<h2>Referral</h2>],
            [<span>Invite your friends and earn 40% of the casino benefits!</span>],
            [
              <p>
                <Image alt="" src={`${BasePath}card_tags/link.svg`} width={20} height={20} />
                <span>Copy the link</span>
              </p>,
              <p>
                <Image alt="" src={`${BasePath}card_tags/money.svg`} width={20} height={20} />
                <span>Get a bonus</span>
              </p>,
              <p>
                <Image alt="" src={`${BasePath}card_tags/user.svg`} width={20} height={20} />
                <span>Get a bonus</span>
              </p>,
            ],
          ],
        },
      ],
    },
  },
};

export const BonusesContent = GlobalContent.screens.bonuses;
