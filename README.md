# Monterail Full Dark
_Monterail Full Dark, a Thunderbird theme inspired by the mockup of Monterail_

## Another version: [Monterail Dark](https://github.com/conema/monterail-dark)

## Thunderbird v68
WARNING: the last version is only compatible with Thunderbird 78.x

## What is this?
This is a full theme for the Thunderbird e-mail client, inspired by [Monterail](https://monterail.com/blog/2016/the-power-of-email-clients-why-did-we-redesign-thunderbird) mockup and by [spymastermatt](https://github.com/spymastermatt/thunderbird-monterail)'s dark theme. As opposed to the spymastermatt's version, this theme can be **installed easily and quickly with an addon** and it's **compatible with Thunderbird 60.x and 78**. The previously versions are compatible also with Thunderbird 68.

## Installation
### Manual (from source)
The first step is to [download](https://github.com/conema/monterail-fulldark/archive/master.zip) the theme, unzip the contents and re-create a zip only with the content of "monterail-fulldark" folder. Change the extension of the archive to ".xpi". An extensive guide for install the xpi file can be found [here](https://support.mozilla.org/en-US/kb/installing-addon-thunderbird) on the Mozilla support site, starting from "A slightly less ideal case". The Addon Manager can be found by clicking the menu icon ![menu](https://prod-cdn.sumo.mozilla.net/uploads/gallery/images/2017-10-22-15-37-15-18c775.png) (on the right, next to the search bar) followed by Add-ons and click on the Themes panel on the left.

### Theme market (**recommended procedure**)
The theme can be directly downloaded from the Thunderbird Add-on market, the old version can be found by searching "Monterail Full Dark" directly in the add-on page of thunderbird or [there](https://addons.thunderbird.net/en-US/thunderbird/addon/monterail-fulldark/), the new version can be found by searching "Monterail Full Dark 2.0 for TB>68" directly in the add-on page of thunderbird or [there](https://addons.thunderbird.net/en-US/thunderbird/addon/monterail-full-dark-2/).


## Screenshots
![screen1](https://user-images.githubusercontent.com/12801153/44424482-837e5f80-a589-11e8-9410-d8d3a538d755.jpg)
![screen2](https://user-images.githubusercontent.com/12801153/44424481-837e5f80-a589-11e8-94bc-3a45bd658151.jpg)

## FAQ
* Installation fail/Theme didn't change in Thunderbird 60<br>
This seems a know issue of Thunderbird 60 [[1]](https://bugzilla.mozilla.org/show_bug.cgi?id=1484393) [[2]](http://forums.mozillazine.org/viewtopic.php?f=39&t=3041219). With this workaround it'll work:
  1. Go where your application data are stored, they usually can be found in:
    - Windows: `C:\Users\[your windows user]\AppData\Roaming\Thunderbird\Profiles\[(literally) random letters and numbers].default/`
    - Linux: `/home/[your linux user]/.thunderbird/[(literally) random letters and numbers].default/`
    - MacOS: `/home/[your macos user]/Library/Thunderbird/Profiles/[(literally) random letters and numbers].default/`
  2. Go to the "extensions" folder, here there should be a file named "MonterailFullDark@conema.me.xpi"
  3. While Thunderbird is opened in background, delete the "MonterailFullDark@conema.me.xpi" file.
  4. Restart Thunderbird and reinstall the theme
  5. Restart Thunderbird again, the theme now should work

* The original Monterail version will be released?

Nope, it already exists: [Monterail by Paenglab](https://addons.thunderbird.net/en-US/thunderbird/addon/monterail/).

* This theme works with Windows/Linux/MacOS?

Yes. Currently the theme has been tested only on Windows 10 and openSUSE. You are free to open an issue here on GitHub if you find bugs.

* With which versions of Thunderbird can I use this theme?

Version **[1.1.6](https://github.com/conema/monterail-fulldark/releases/tag/1.1.6)** works with Thunderbird **<=60.x**. Version **[2.1](https://github.com/conema/monterail-fulldark/releases/tag/2.1)** works only with Thunderbird **68**. The last versions works with Thunderbird **78**.





## Credits
This addon is based on [Monterail by Paenglab](https://addons.thunderbird.net/en-US/thunderbird/addon/monterail/), source code is included.

Special thanks to spymastermatt for the work that he done to create the original dark theme.
