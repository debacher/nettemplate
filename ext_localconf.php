<?php
if (!defined('TYPO3_MODE')) { die('Access denied.'); }

call_user_func(
    function ($extConfString) {

        // Add pageTS config
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:nettemplate/Configuration/TypoScript/tsconfig.ts">');

        // Setup (nicht notwendig, geht automatisch über Statische Templates einschlißen ...
          //  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript('nettemplate','setup',' <INCLUDE_TYPOSCRIPT: source="FILE:EXT:nettemplate/Configuration/TypoScript/setup.txt">');
        // eigenes Setip, besser über include im automatischen Setup 
          //  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript('nettemplate','setup',' <INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/nettemplate/Configuration/TypoScript/rootsetup.txt">');
        //Konstanten (nicht notwendig, Datei unter source="FILE:EXT:nettemplate/Configuration/TypoScript/ wird automatisch eingebunden, dann diese includieren
          //  \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript('nettemplate','constants',' <INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/nettemplate/Configuration/TypoScript/constants.txt">');

        // Get ext configuration
          // strlen($extConfString)?$extConf = unserialize($extConfString):$extConf = array();

    },$_EXTCONF
);
?>
