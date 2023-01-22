import Hashtag from "../component/hashtag";

function Tags(){
    return(
        <div className="mt-8 mb-4">
            <div className="m-2">
                <p className="font-inter font-medium text-sm text-greyTagsTitle mb-2">Tags</p>
                <div className="w-full grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-x-2.5 gap-y-2 my-2">
                    <div>
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div>
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div>
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div>
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div>
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div>
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden sm:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden sm:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden sm:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden sm:block">
                        <Hashtag tag="Bitcoin" />
                    </div>

                    <div className="hidden lg:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden lg:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden lg:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden lg:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden lg:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden lg:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden lg:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden lg:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden lg:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                    <div className="hidden lg:block">
                        <Hashtag tag="Bitcoin" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tags;