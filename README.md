Необходимо реализовать Web-приложение для поиска репозиториев GitHub с помощью 
GitHub REST API или GitHub GraphQL API (последний будет плюсом).
Результаты поиска представить в виде таблицы со следующими столбцами: название, 
язык, число форков, число звёзд, дата обновления.
По выбору строки должны отображаться детали. В деталях выбранного репозитория 
необходимо отобразить: название, описание, лицензию. 
Должна быть реализована пагинация и сортировка с возможностью выбора направления 
по следующим столбцам: число звёзд, число форков, дата обновления.
Figma:
https://figma.fun/YInVdW
В качестве языка программирования использовать TypeScript. Для стилизации 
использовать Sass. Рекомендуется использовать CSS Modules.
Следует использовать библиотеку компонентов MUI.
Для загрузки данных из API использовать Redux Toolkit.

## Установка зависимостей
  ```bash
  npm install
  ```

## Запуск приложения
  ```bash
  npm run dev
  ```
