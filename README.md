# Monterail Dark
_Monterail Dark, a Thunderbird theme inspired by the mockup of Monterail_

## What is this?
This is a full theme for the Thunderbird e-mail client, inspired by [Monterail](https://monterail.com/blog/2016/the-power-of-email-clients-why-did-we-redesign-thunderbird) mockup and by [spymastermatt](https://github.com/spymastermatt/thunderbird-monterail)'s dark theme. As opposed to the spymastermatt's version, this theme can be **installed easily and quickly with an addon** and it's **fully compatible with Thunderbird 60.x**.

## Installation
### Manual (from source)
The first step is to [download](https://github.com/conema/monterail-dark/archive/master.zip) the theme, unzip the contents and re-create a zip only with the content of "monterail-dark" folder. Change the extension of the archive to ".xpi". An extensive guide for install the xpi file can be found [here](https://support.mozilla.org/en-US/kb/installing-addon-thunderbird) on the Mozilla support site, starting from "A slightly less ideal case". The Addon Manager can be found by clicking the menu icon ![menu](https://prod-cdn.sumo.mozilla.net/uploads/gallery/images/2017-10-22-15-37-15-18c775.png) (on the right, next to the search bar) followed by Add-ons and click on the Themes panel on the left.

### Theme market (**recommended procedure**)
The theme can be directly downloaded from the Thunderbird Add-on market, it can be found by searching "Monterail Dark" directly in the add-on page of thunderbird or [there](https://addons.thunderbird.net/en-US/thunderbird/addon/monterail-dark/).

## Screenshots
![screen1](https://user-images.githubusercontent.com/12801153/44290442-039a8180-a279-11e8-9a04-574cc991f012.jpg)
![screen2](https://user-images.githubusercontent.com/12801153/44290455-13b26100-a279-11e8-9552-d1ddd922dd5a.jpg)

## FAQ
* Installation fail/Theme didn't change in Thunderbird 60<br>
This seems a know issue of Thunderbird 60 [[1]](https://bugzilla.mozilla.org/show_bug.cgi?id=1484393) [[2]](http://forums.mozillazine.org/viewtopic.php?f=39&t=3041219). With this workaround it'll work:
  1. Go where your application data are stored, they usually can be found in:
    - Windows: `C:\Users\[your windows user]\AppData\Roaming\Thunderbird\Profiles\[(literally) random letters and numbers].default/`
    - Linux: `/home/[your linux user]/.thunderbird/[(literally) random letters and numbers].default/`
    - MacOS: `/home/[your macos user]/Library/Thunderbird/Profiles/[(literally) random letters and numbers].default/`
  2. Go to the "extensions" folder, here there should be a file named "MonterailDark@conema.me"
  3. **While the Thunderbird is opened** in background, delete the "MonterailDark@conema.me" file.
  4. Restart Thunderbird and reinstall the theme
  5. Restart Thunderbird again, the theme now should work


* The Light/Full Dark version will be released?

Yes, but for the moment it is better to completely finish the dark version, after that, the creation of other versions will fast as a snap of fingers.

* The original Monterail version will be released?

Nope, it already exists: [Monterail by Paenglab](https://addons.thunderbird.net/en-US/thunderbird/addon/monterail/).

* This theme should work with Windows/Linux/MacOS?

Yes and no. Currently the theme have been tested only on Windows 10 and OpenSuse (Plasma). In theory there should not be problems, otherwise you are free to open an issue here on GitHub.

* With which versions of Thunderbird can I use this theme?

For now only **60.x** and **52.9.1** are been tested, in the future, backward compatibility to the most requested versions will be added.

## Credits
This addon is based on [Monterail by Paenglab](https://addons.thunderbird.net/en-US/thunderbird/addon/monterail/), source code is included.

Special thanks to spymastermatt for the work that he done to create the original dark theme.
