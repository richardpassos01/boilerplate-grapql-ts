import { Resolver, Mutation, Arg, Query, InputType, Field } from "type-graphql";
import { Movie } from "../entity/Movie";


@InputType()
class MovieInput {
    @Field()
    title: string

    @Field()
    minutes: number
}

@Resolver()
export class MovieResolver {
    @Mutation(() => Movie)
    async createMovie(
        @Arg('options', () => MovieInput) options: MovieInput
    ) {
        const movie = await Movie.create(options).save();
        return movie;
    }

    @Query(() => [Movie])
    movies() {
        return Movie.find();
    }
}
