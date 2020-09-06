import {MikroORM} from "@mikro-orm/core"
import {Post} from "./entities/Post";
import microConfig from "./mikro-orm.config";


const main = async () => {

    const orm = await MikroORM.init(microConfig); // Инициализируем MikroOrm
    await orm.getMigrator().up(); // Применяем миграции

    const post = orm.em.create(Post, {title: 'my first post'}) // Добавляем данные о первом посте
    await orm.em.persistAndFlush(post);
}

main().catch(err => console.log(err));
