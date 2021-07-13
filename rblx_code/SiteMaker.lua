local _url_ = "YOUR URL HERE"

--[[
SiteCreator v1.0

A module that lets you create a website and publish it.

(Can only be used in normal scripts because this uses HTTP service)

-----------------------------------------------SETUP---------------------------------------------------------
1. Turn on HTTP services.
2. Add this script to ReplicatedStorage.
3. Create a new script and require() this script.

-----------------------------------------------USAGE---------------------------------------------------------

local siteCreator=require(game.ReplicatedStorage.SiteCreator)
local created_site=siteCreator.makeSite(HTML CODE HERE)
print(created_site) --Print URL of created website
]]--

local h={}

h.makeSite=function(code)
	local val=string.gsub(code, [[

]], "(NEWLINE)")

	val=string.gsub(val, [["]], [[(DOUBLEQUOTE)]])

	val=string.gsub(val, [[{]], "")

	val=string.gsub(val, [[}]], "")
	
	val=string.gsub(val, [[ ]], "(SPACE)")

	local array=[[{
"html": "]]..val..[["
}]]
	
	print(array)
	
	local site=game.HttpService:PostAsync(_url_+"/newSite", array)
	local siteData=game.HttpService:JSONDecode(site)

return siteData.site
end

return h
