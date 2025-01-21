# Содержимое файла env

VITE_API_URL=https://gateway.scan-interfax.ru/api/v1
VITE_ACCOUNT_LOGIN=/account/login
VITE_ACCOUNT_INFO=/account/info
VITE_SEARCH_HISTOGRAMS=/objectsearch/histograms
VITE_SEARCH=/objectsearch
VITE_DOCUMENTS=/documents

# Авторизация

Для авторизации можно использовать любой из доступных [аккаунтов](https://docs.google.com/spreadsheets/d/16sXmrKf--J-5F7AMwMNCpRVZovQmTsvF_tcDoFm1en8/edit?pli=1&).gid=1906748092#gid=1906748092

# Техническое задание

На выполнение проекта у вас есть 4 недели. Максимальная оценка за проект — 40 баллов.

Далее — описание проектной задачи!

# Постановка задачи

Компания «СКАН» разработала новый API для поиска публикаций о
компании (юридическом лице) в средствах массовой информации по ИНН.
Серверная часть приложения уже готова, ваша задача — разработать клиентскую часть.

# Функциональные требования

Клиентская часть сервиса состоит из:

- главной страницы,
- формы авторизации,
- формы для ввода параметров запроса,
- страницы с выводом результатов запроса.
  Макет, подготовленный дизайнерами, находится [здесь](https://www.figma.com/file/u3MOjzYnTnirz712GrLbFv/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-%D0%A1%D0%9A%D0%90%D0%9D).

Далее мы подробно разберём поведение отдельных элементов и
страниц сервиса.

## Шапка сайта

В ней находятся:

- логотип,
- меню,
- панель управления учётной записью.

Страницы «Тарифы» и «FAQ» выходят за рамки данного ТЗ.
Поэтому ссылки на них можно оставить пустыми или прописать
фейковые URL-адреса.

Шапка сайта выглядит по-разному для авторизованного и
неавторизованного пользователя.

**Шапка сайта для неавторизованного пользователя:**

![](https://lms-cdn.skillfactory.ru/assets/courseware/v1/a1fc17591abddfb2a3d914e83053a559/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_2.png)

- Ссылку «Зарегистрироваться» можно оставить пустой или прописать
  фейковый URL.
- Кнопка «Войти» ведёт на страницу авторизации.

** Шапка сайта для авторизованного пользователя: **
![](https://lms-cdn.skillfactory.ru/assets/courseware/v1/6868e21a9c4093b5527b4561797750ea/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_3.png)

- Вместо кнопок «Зарегистрироваться» и «Войти» появился аватар
  пользователя с именем и кнопкой «Выйти».
- Кнопка «Выйти» сбрасывает авторизацию.
- Слева от аватара должна быть панель с информацией о лимите по
  компаниям в аккаунте и количестве уже используемых компаний.
  Эта информация подгружается не сразу, для её получения нужно
  отправить отдельный запрос. Пока запрос грузится, нужно показывать
  лоадер. Пример этой панели с лоадером есть в макете.

## Главная страница

Главная страница содержит описание сервиса и доступна всем
пользователям без авторизации.

Обратите внимание на следующие пункты:

1. Кнопка «Запросить данные» ведёт на страницу ввода параметров
   поиска. Её должен видеть только зарегистрированный пользователь.

   ![Главная страница сервиса](https://lms-cdn.skillfactory.ru/assets/courseware/v1/00d671dd16ba4e4a941431725871732e/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_4.png)

2. Карточки в разделе «Почему именно мы» должны переключаться
   по принципу карусели: клик на стрелке слева или справа переключает
   карточки в соответствующем направлении.

   Вы можете добавить произвольное количество карточек
   (или продублировать уже имеющиеся),
   чтобы протестировать работу карусели.

   ![В карточках зафиксированы УТП сервиса](https://lms-cdn.skillfactory.ru/assets/courseware/v1/82b39d8d5a34f7f5443a9d213cbe833f/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_5.png)

3. В разделе «Наши тарифы» перечислены возможные тарифы.
   Кнопка «Подробнее» — заглушка, при клике на неё ничего не происходит.

   Если пользователь авторизован, карточка с используемым им
   тарифом должна отличаться от остальных:

   - появляется бейдж «Текущий тариф»;
   - кнопка «Подробнее» меняется на «Перейти в личный кабинет»
     (она тоже не функциональна);
   - карточка выделяется цветом, который соответствует тарифу.

   ![Пример внешнего вида карточки для зарегистрированного пользователя с тарифом Beginner](https://lms-cdn.skillfactory.ru/assets/courseware/v1/a03a26b8f1c1987d094ec57560aa7891/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_6.png)

## Форма авторизации

Эта страница содержит форму с полями для ввода логина и пароля.
При заполнении пароля вводимое значение должно маскироваться.

**Подсказка:** Для этого достаточно присвоить инпуту атрибут `type="password"`.

При отсутствии одного из значений — логина или пароля —
кнопка «Войти» неактивна, и при клике на неё ничего не происходит.

![Кнопка «Войти» неактивна, если поля не заполнены](https://lms-cdn.skillfactory.ru/assets/courseware/v1/4ab8d5c8ca6d0879c98672eebed5a978/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_7.png)

После ввода всех необходимых значений кнопка становится активной.
При нажатии на неё нужно отправить запрос на `POST account/login`

При успешной авторизации в ответе на запрос придут:

- токен авторизации (`accessToken`),
- дата, до которой токен действителен (`expire`).

Эти данные необходимо сохранить в `localStorage`,
чтобы пользователю не нужно было заново авторизоваться после
каждого обновления страницы.

![В случае неуспешного запроса сервис должен выдать сообщение об ошибке](https://lms-cdn.skillfactory.ru/assets/courseware/v1/8b219ac9858c70f684c9d2c3ea84eefe/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_8.png)

Остальные элементы формы не функциональны:

- вкладка «Зарегистрироваться»,
- ссылка «Восстановить пароль»,
- кнопки «Войти» через Google / Facebook / Яндекс.

Их нужно просто сверстать.

## Форма для ввода параметров запроса

Данная страница содержит основу функционала сервиса: форму,
в которой пользователь задаёт параметры поиска.

Эта страница доступна только авторизованным пользователям.
Если неавторизованный пользователь пытается её открыть,
нужно переадресовать его на главную страницу сервиса.

На странице должна быть форма поиска со следующими полями:

| Название                            | Тип поля                                                                                           | Обязательное |
| ----------------------------------- | -------------------------------------------------------------------------------------------------- | ------------ |
| ИНН                                 | Текстовое<br/>Необходима валидация на соответствие формату ИНН                                     | ✔️           |
| Признак максимальной полноты        | Чекбокс                                                                                            | ✖️           |
| Упоминания в бизнес-контексте       | Чекбокс                                                                                            | ✖️           |
| Главная роль в публикации           | Чекбокс                                                                                            | ✖️           |
| Тональность                         | Выпадающий список с выбором одного из вариантов: <br/>- позитивная,<br/>- негативная,<br/>- любая. | ✔️           |
| Публикации только с риск-факторами  | Чекбокс                                                                                            | ✖️           |
| Включать технические новости рынков | Чекбокс                                                                                            | ✖️           |
| Включать анонсы и календари         | Чекбокс                                                                                            | ✖️           |
| Включать сводки новостей            | Чекбокс                                                                                            | ✖️           |
| Количество документов в выдаче      | Число.<br/>Возможные значения: от 1 до 1000.                                                       | ✔️           |
| Диапазон дат для поиска             | Два поля с выбором даты:<br/>- дата начала поиска,<br/> - дата конца поиска.                       | ✔️️          |

![
Обязательные поля должны быть отмечены звёздочками. 
Если хотя бы одно из обязательных полей не заполнено, 
кнопка «Поиск» должна быть неактивна.
](https://lms-cdn.skillfactory.ru/assets/courseware/v1/3b0be82d82e7b649a6d7e8d6dae30985/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_9.png)

![
Если введённый ИНН не соответствует формату, нужно вывести ошибку. Кнопка «Поиск» в этом случае должна быть так же неактивна.
](https://lms-cdn.skillfactory.ru/assets/courseware/v1/287640625d2bfd1665b6efe329d7f2b3/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_10.png)

Подсказка: Статью с объяснением, как проверить валидность ИНН,
вы найдёте в конце модуля, в разделе «Полезные ссылки».

Введённый диапазон (дата начала и конца поиска) необходимо также
проверять на корректность:

- даты не должны быть в будущем времени;
- дата начала не может быть позже даты конца.

![
Если эти условия не выполняются, нужно показать сообщение об ошибке.
](https://lms-cdn.skillfactory.ru/assets/courseware/v1/bbc45e7681c92aa32ecaf367c2412eeb/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_11.png)

Если поисковый запрос введён корректно, по нажатии на кнопку «Поиск»
выполняется запрос `POST objectsearch/histograms` и открывается
страница с результатами запроса.

## Вывод результатов поиска

Здесь мы выводим результаты ранее введённого запроса.
Этот раздел необязательно делать физически отдельной страницей
(присваивать свой URL-адрес).
Можно отобразить его поверх формы поиска после отправки запроса.

Поиск состоит из трёх этапов:

1. Сначала мы делаем запрос `POST objectsearch/histograms` и получаем
   общую сводку по количеству публикаций и рискам.

   ![
После успешного выполнения запроса сводку необходимо отобразить вот так.
](https://lms-cdn.skillfactory.ru/assets/courseware/v1/51081a98cb29812466321e1427b59e89/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_12.png)

2. Периодов может быть больше, чем помещается на экране. Поэтому необходимо реализовать карусель для горизонтального переключения между ними.

   На время, пока сводка подгружается, необходимо показать лоадер.

3. Затем, используя те же параметры поиска, отправляем запрос
   `POST objectsearch`, чтобы получить список публикаций.
   В ответе придёт список `ID` найденных документов.
4. После того как мы получили `ID` документов, остался последний шаг.
   Подгрузить их содержимое: заголовок, дату, источник,
   текст публикации и так далее.
   Для этого воспользуемся запросом `POST documents`.

Однако мы уже знаем, что найденных публикаций может быть много
(лимит поиска — 1000 результатов).
Было бы неправильно загружать всё и сразу: это может занять много
времени, а мы не хотим задерживать пользователя.

Поэтому необходимо реализовать ленивую загрузку (`lazy loading`).
Сначала нужно подгрузить только 10 первых результатов и добавить
кнопку «Показать больше», по нажатии на которую будет подгружаться
следующие 10 результатов. И так до тех пор, пока не будут загружены
последние из найденных публикаций.

После этого кнопку «Показать больше» необходимо спрятать.

![
Так выглядят загруженные публикации.
](https://lms-cdn.skillfactory.ru/assets/courseware/v1/4ab18c85965975f5f1ba50130e7145dc/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_13.png)

## Карточка публикации

![
Карточка публикации отдельно.
](https://lms-cdn.skillfactory.ru/assets/courseware/v1/4ab18c85965975f5f1ba50130e7145dc/asset-v1:Skillfactory+FR+2020+type@asset+block/FR_final_2_13.png)

В шапке карточки выводим дату публикации и название источника. Название является также ссылкой на оригинал статьи.

Далее идёт заголовок публикации, под ним может быть несколько тегов. Разберём их подробнее.

Каждый объект публикации имеет свойство `attributes`:

```json
{
  "attributes": {
    "isTechNews": false,
    "isAnnouncement": false,
    "isDigest": false,
    "influence": 352.0,
    "wordCount": 99,
    "coverage": {
      "value": 1402211.0,
      "state": "hasData"
    }
  }
}
```

В зависимости от значений свойств `isTechNews`, `isAnnouncement`
и `isDigest` карточка публикации может иметь 3 вида тегов:

- технические новости, если `isTechNews` равно true;
- анонсы и события, если `isAnnouncement` равно true;
- сводки новостей, если `isDigest` равно true.

Далее необходимо отобразить содержимое документа
(с картинками, если они есть).

Внизу карточки находятся кнопка «Читать в источнике»,
которая открывает в новой вкладке оригинальную статью,
и количество слов. Количество слов также можно считать из объекта
`attributes` (свойство `wordCount`).

# Требования к вёрстке

1.  Вёрстка должна соответствовать макету.
    Добиваться Pixel Perfect соответствия не обязательно,
    но основные моменты должны быть соблюдены:

    - наличие всех элементов интерфейса,
    - цветовая гамма,
    - шрифты,
    - размеры,
    - отступы.

2.  Приложение должно корректно отображаться и работать
    на мобильных устройствах. Дизайн для мобильной версии вы найдёте
    в макете.
3.  Соблюдайте семантическую вёрстку. На каждой странице должны
    присутствовать разделы `<header>`, `<main>` и `<footer>`,
    а также заголовок `<h1>`. Кнопки должны быть реализованы
    элементом `<button>`, выпадающий список — элементом `<select>`
    и так далее.
4.  Если какой-либо элемент доступен для взаимодействия
    (ссылка, кнопка), при наведении курсора должен появляться
    `cursor: pointer`.

        Внешний вид самого элемента тоже должен меняться при наведении

    курсора. Пример: нижнее подчёркивание текста у ссылки,
    другой цвет фона у кнопки.

5.  Используйте любой вариант подключения стилей на ваше усмотрение:
    - общий файл стилей проекта,
    - CSS-модули,
    - специальные React-библиотеки для стилизации компонентов (например, Styled Components).
6.  Использовать селекторы по тегу и `ID` для задания стилей
    не рекомендуется, старайтесь отдавать предпочтение классам.
7.  Лучше всего экспортировать картинки из Figma в формате SVG,
    чтобы качество изображений было стабильным на разных разрешениях.

# Требования к коду

1. Проект должен был выполнен на React.
2. Интерфейс должен быть поделён на компоненты.
   Перед началом работы обдумайте, какие компоненты вы будете
   использовать. Деление должно быть логичным и оправданным.
3. Проект будет работать со множеством данных.
   Рекомендуем использовать более продвинутый инструмент хранения
   и изменения данных, чем обычный state. Например, useReducer,
   React Context или Redux.
4. При написании кода старайтесь следовать принципам:
   - KISS (Keep It Short and Simple — не усложняй),
   - DRY (Don’t Repeat Yourself — не повторяйся).
5. Вы не ограничены в использовании любых инструментов и
   дополнительных библиотек (например, для реализации карусели).
   Но старайтесь следить за тем, чтобы их применение было оправдано
   и не усложняло код без необходимости.

# Прочие требования

1. Пишите код аккуратно, с соблюдением форматирования и отступов.
2. Осмысленно называйте компоненты, переменные и функции.
3. Используйте современный синтаксис: функциональные
   React-компоненты и хуки, стрелочные функции, декомпозицию
   и так далее.
4. При размещении проекта на GitHub не забудьте добавить папку
   node_modules в файл .gitignore, чтобы она не попала в ваш репозиторий.

## Пример содержимого файла .env для работы с окружением

VITE_API_URL=https://gateway.scan-interfax.ru/api/v1

VITE_ACCOUNT_LOGIN=/account/login

VITE_ACCOUNT_INFO=/account/info

VITE_SEARCH_HISTOGRAMS=/objectsearch/histograms

VITE_SEARCH=/objectsearch
